import { serve } from '@hono/node-server'
import { Hono } from 'hono'

const app = new Hono()
serve(app)

app.get('/', async c => {
	const response = await fetch('https://hono.dev/images/code.png')

	return new Response(
		new ReadableStream({
			async start(controller) {
				// @ts-expect-error - ReadableStream does have an async iterator now in Node 18+, but
				// Node types haven't caught up
				for await (const chunk of response.body!) {
					await new Promise(resolve => setTimeout(resolve, 100))
					controller.enqueue(chunk)
				}
				controller.close()
			},
		}),
		response
	)
})
