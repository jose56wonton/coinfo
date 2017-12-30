export const GET_LIST = "get_list";
export function getList(values){
  return{
    type: GET_LIST,
    payload: values
  }
}