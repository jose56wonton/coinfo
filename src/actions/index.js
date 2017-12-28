export const SOME_THING = "some_thing";
export function some_thing(values){
  return{
    type: SOME_THING,
    payload: values
  }
}