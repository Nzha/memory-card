import Score from './Score';
import Cards from './Cards';

function Main() {
  return (
    <div className="flex flex-col gap-8 bg-[#7bd0f5] py-8">
      <Score />
      <Cards />
    </div>
  );
}

export default Main;
