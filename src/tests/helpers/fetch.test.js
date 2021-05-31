import { fetchConToken, fetchSinToken } from "../../helpers/fetch"

describe('Pruebas en el helper Fetch', () => {

    let token = ''
    
    test('debe funcionar fetchSinToken', async() => {
        
        const  resp = await fetchSinToken('auth', { email: 'vcorsinoa@gmail.com', password: '123456'}, 'POST');

        expect( resp instanceof Response ).toBe( true )

        const body = await resp.json();
        expect( body.ok ).toBe( true )

        // console.log(body.token)

        token = body.token;

    })

    
    test('debe funcionar fetchConToken', async() => {
        
        // console.log(token)
        localStorage.setItem('token', token);

        const resp = await fetchConToken('events/605fe0d03a7e1231546064f8', {}, 'DELETE')
        const body = await resp.json()

        // console.log(body)
        expect(body.msg).toBe('Evento no existe por ese id')

    })
    
})
