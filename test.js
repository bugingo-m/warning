const numbers =[1,2,4]

const names =[
    {
        id: 1,
        name:'bugingo'
    },
    {
        id: 2,
        name:'muntu'
    },
    {
        id: 3,
        name:'audrey'
    },
    {
        id: 4,
        name:'gloria'
    }
]

const sorted = numbers.map((n)=>{
    return(
        names.find((name)=>name.id === n)
    )
})
console.log(sorted);