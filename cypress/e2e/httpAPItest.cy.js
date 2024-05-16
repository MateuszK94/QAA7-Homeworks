describe('HTTPBin API Tests', () => {
    it('GET request', () => {
      cy.request('GET', 'https://httpbin.org/get')
        .then((response) => {
          expect(response.status).to.eq(200)
        })
    })
  
    it('POST request', () => {
      cy.request('POST', 'https://httpbin.org/post', {})
        .then((response) => {
          expect(response.status).to.eq(200)
        })
    })
  
    it('PUT request', () => {
      cy.request('PUT', 'https://httpbin.org/put', {})
        .then((response) => {
          expect(response.status).to.eq(200)
        })
    })
  
    it('DELETE request', () => {
      cy.request('DELETE', 'https://httpbin.org/delete')
        .then((response) => {
          expect(response.status).to.eq(200)
        })
    })
  
    it('Headers request', () => {
      const headers = {
        'Custom-Header': 'Custom Value'
      }
  
      cy.request({
        method: 'GET',
        url: 'https://httpbin.org/headers',
        headers: headers
      }).then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body.headers).to.include(headers)
      })
    })
  
    it('Redirect request', () => {
      cy.request('GET', 'https://httpbin.org/redirect/3')
        .then((response) => {
          expect(response.status).to.eq(200)
          expect(response.redirects.length).to.eq(3)
        })
    })
  
    it('Authentication request', () => {
      cy.request({
        method: 'GET',
        url: 'https://httpbin.org/basic-auth/user/passwd',
        auth: {
          username: 'user',
          password: 'passwd'
        }
      }).then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body.authenticated).to.be.true
      })
    })
  
    it('Delay request', () => {
      cy.request('GET', 'https://httpbin.org/delay/5')
        .then((response) => {
          expect(response.status).to.eq(200)
          expect(response.duration).to.be.greaterThan(5000)
        })
    })
  
    it('Cookie request', () => {
      cy.request('GET', 'https://httpbin.org/cookies')
        .then((response) => {
          expect(response.status).to.eq(200)
          expect(response.body.cookies).to.exist
        })
    })
  
    it('File upload request', () => {
      cy.fixture('example.json').then((fileContent) => {
        cy.request({
          method: 'POST',
          url: 'https://httpbin.org/post',
          body: fileContent
        }).then((response) => {
          expect(response.status).to.eq(200)
          expect(response.body.data).to.exist
        })
      })
    })
  })