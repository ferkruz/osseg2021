import instance from "../Config/axios"

export function getAll(){
    return instance.get("pokemon?limit=9&offset=0")
}

export function getAllPag(index){
    console.log (`pokemon?limit=9&offset=${index*9}`)
    return instance.get(`pokemon?limit=9&offset=${index*9}`) 
}