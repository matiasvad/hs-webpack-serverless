import fetch from 'node-fetch';

export function main(context, sendResponse) {

	async function callReqRes() {
		const getData = await (await fetch('https://reqres.in/api/users?page=2')).json();
		return getData;
	}

	async function go() {
		const data = await callReqRes();
		sendResponse({
			statusCode: 200,
			body: data
		})
	}

	go()
};