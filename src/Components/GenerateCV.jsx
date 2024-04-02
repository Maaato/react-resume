export const GenerateCV = () => {
  return (
    <div className='generate__container' id='resume__generate'>
      <button href='#' className='generate__btn' onClick={() => window.print()}>
        Download CV
      </button>
    </div>
  );
};