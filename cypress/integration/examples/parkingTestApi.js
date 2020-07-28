describe('API Testing', function()
{
    Cypress.config('baseUrl','https://reqres.in/api')

    it('GET Request', function()
    {
        cy.request('GET','/users?page=2').then((response) => {
            expect(response).to.have.property('status',200)
            expect(response.body).not.to.be.null
            expect(response.body.data).to.have.length(6)
            expect(response.body.data[0].id).to.equal(7)
            expect(response.body.data[0].email).to.equal('michael.lawson@reqres.in')
            expect(response.duration).to.be.within(100,300)
            expect(response.headers.age).not.to.be.null
            expect(response.headers).to.include({
                'access-control-allow-origin': "*",
                'cache-control': "max-age=14400",
                'cf-cache-status': "HIT",
                'connection': "keep-alive",
                'x-powered-by': "Express"
            })

            expect(response.body).to.deep.equal({
                "page": 2,
                "per_page": 6,
                "total": 12,
                "total_pages": 2,
                "data": [
                {
                "id": 7,
                "email": "michael.lawson@reqres.in",
                "first_name": "Michael",
                "last_name": "Lawson",
                "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/follettkyle/128.jpg"
                },
                {
                "id": 8,
                "email": "lindsay.ferguson@reqres.in",
                "first_name": "Lindsay",
                "last_name": "Ferguson",
                "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/araa3185/128.jpg"
                },
                {
                "id": 9,
                "email": "tobias.funke@reqres.in",
                "first_name": "Tobias",
                "last_name": "Funke",
                "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/vivekprvr/128.jpg"
                },
                {
                "id": 10,
                "email": "byron.fields@reqres.in",
                "first_name": "Byron",
                "last_name": "Fields",
                "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/russoedu/128.jpg"
                },
                {
                "id": 11,
                "email": "george.edwards@reqres.in",
                "first_name": "George",
                "last_name": "Edwards",
                "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/mrmoiree/128.jpg"
                },
                {
                "id": 12,
                "email": "rachel.howell@reqres.in",
                "first_name": "Rachel",
                "last_name": "Howell",
                "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/hebertialmeida/128.jpg"
                }
                ],
                "ad": {
                "company": "StatusCode Weekly",
                "url": "http://statuscode.org/",
                "text": "A weekly newsletter focusing on software development, infrastructure, the server, performance, and the stack end of things."
                }
                })

        })


    })

    it('POST Request', function()
    {
        const reqBody = { "name": "morpheus", "job": "leader" }
        cy.request('POST','/users?page=2',reqBody).then((response) => {

            expect(response).to.have.property('status',201)

            const userID1= response.body.name
            console.log(userID1)

            expect(response.body.name).to.equal(userID1)



        
        })




    })




})  