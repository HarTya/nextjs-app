import { NextApiRequest, NextApiResponse } from 'next'

export default function statusHandler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	res.json({ message: 'All services work correctly' })
}
