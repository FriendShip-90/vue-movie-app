exports.handler = async function ( e, context){
    return { 
        statusCode: 200,
        body: JSON.stringify({
            name: 'Man_Jock',
            age: 33,
            email: 'eoonw@naver.com'
        })

    }
}