let customFetch = (time,task) =>{
    return new Promise((resolve,reject)=>{
        if (true){
            setTimeout(()=>{
                resolve(task)
            },time)
        } else{
            reject('error')
        }
    })
}

export default customFetch;