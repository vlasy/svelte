
export default {

	html: ``,

	async test({ assert, component, target }) {

    await(new Promise(r => setTimeout(r, 1000)))
    
    assert.htmlEqual(target.innerHTML, `
      the value is <span>2</span>
    `);
			
	}
};