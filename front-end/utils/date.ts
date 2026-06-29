export function toJalali(){
    const today = new Date().toLocaleString('fa-IR' ,{
        month:"long" ,
        day:"numeric",
        year:"numeric"
    }) ;

    return today ;
}