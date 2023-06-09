function SinglePostAside({ img, title, isSpecial, hideSubtitle }) {
  // destrukturizacija
  // const { img, title } = props;

  // jei musu SinglePostAside yra special uzdeti jam klase .specialPost
  // jei postas nera isSpecial tai klase yra paGrid
  // jei postas yra special tai klase yra paGrid ir specialPost
  let dynamicClass = isSpecial ? 'specialPost paGrid' : 'paGrid';
  dynamicClass = `paGrid ${isSpecial ? 'specialPost' : ''}`;
  return (
    <div className={dynamicClass}>
      <img src={img} alt={title} />
      <h4>{title}</h4>
      {/* jei && kaireje yra true tai jis grazina tai kas yra po desine */}
      {/* jei && false jis grazina tai kas yra po kaire ir false reikme jsx nesigeneruoja */}
      {!hideSubtitle && <p>Lorem, ipsum dolor.</p>}
    </div>
  );
}
export default SinglePostAside;
