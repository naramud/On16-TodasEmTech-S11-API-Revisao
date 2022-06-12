const series = require('../models/series.json')

const gettAllSeries = (request, response) => {
    try {
        response.status(200).json([{
            "series": series
        }])
    } catch (err) {
        response.status(500).send({ message: "Erro no server" })
    }
}

const getGenero = (request, response) => {
    const generoRequest = request.query.genero
    const generoFilter = series.filter(series => series.genero.includes(generoRequest))
    if (titleFilter) {
        response.status(200).send( generoFilter)
    } else {
        response.status(404).send ([{
            "mensagem": 'genero não encontrado'
        }])
    }
    
}

const getPesquisar = (request, response) => {
    const idRequest = request.params.id
    const pesquisarRequest = request.body.id
    idFilter = pods.find((series) => series.id == idRequest)
    
    if (idFilter) {
        idFilter.stars = pesquisarRequest
        response.status(200).json([{
            message: "pesquisa realizada", 
           series
        }])
    }else{
        response.status(404).json([{
            message: "Não foi encontrado"
        }])
    }
}

const postSeries = (request, response) => {
    let addRequest = request.body.add
    let nameRequest = request.body.title
    let seriesRequest = request.body.series

    let newtitle = {
        id: Math.floor(Date.now() * Math.random()).toString(36),

            "series" :seriesRequest,
            "Episódio": nameRequest,
            "adicionar": addRequest
    }
    series.push(newtitle)
    response.status(201).json([{
        "message": "nova serie cadatrada",
        newtitle
    }])
}

const deleteSerie = (request, response) => {
    
    const idRequest = request.params.id
    
    const indiceSeries = series.findIndex(series => series.id == idRequest)
    
    series.splice(indiceSeries, 1)
    
    response.status(200).json([{
        "message": "serie deletada ;)",
        "deletado": idRequest,
       series
    }])

    }

    const updateSeries = (request, response) => {
 
        const idRequest = request.params.id

        let serieNova = request.body.title
    
     series = series.find(series => series.id == idRequest)
    
     series.title = serieNova
    
        response.status(200).json([{
    
            "mensagem": "sua serie foi atualizadaaaaa",
            series
    
        }])
    
    }



module.exports = {
    gettAllSeries,
    getGenero,
    getPesquisar,
    postSeries,
    deleteSerie,
    updateSeries
}