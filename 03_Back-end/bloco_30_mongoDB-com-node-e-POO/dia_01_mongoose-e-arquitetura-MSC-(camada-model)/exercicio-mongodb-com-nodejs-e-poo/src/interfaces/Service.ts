interface IService<T> {
  create(obj:unknown):Promise<T>,
  readOne(_id:string):Promise<T>,
  readAll():Promise<T[]>,
  destroy(_id:string):Promise<T>,
}

export default IService;
