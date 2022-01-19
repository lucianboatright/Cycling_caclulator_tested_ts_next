import add from "@src/add";

describe('add test', () => {
    it('should return 3', () => {
        expect(add(1, 2)).toBe(3);
    })
})