/* 
sukurti ikonele comppnenta, panaudoti isitikinti kad veikia
parasius <Icon icon='shower' /> 
turetume gauti <i class='fa fa-shower' aria-hidden='true'></i>

extra <Icon icon='shower' lg  gausim didele ikonele/>
*/

function Icon({ name = 'exclamation-triangle', lg }) {
  return <i class={`fa fa-${name} ${lg ? 'fa-3x' : ''}`} aria-hidden='true'></i>;
}

export default Icon;
