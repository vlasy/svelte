export default {
	async test({ assert, component, target, window, raf }) {
    for (let i = 0; i < 300; i++) {
      raf.tick(i)
      await(new Promise(r => setTimeout(r, 1)))
    }
    
    assert.htmlEqual(target.innerHTML, `
      the value is <span>2</span>
    `);
			
	}
};