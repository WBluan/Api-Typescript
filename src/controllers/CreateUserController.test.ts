describe('CreateUserControler', () => {
    function soma(a:number, b:number){
        return a + b;
    }

    it('Deve retornar a soma de dois números', () => {
        const result = soma(1, 2)
        expect(result).toBe(3)
    })
})