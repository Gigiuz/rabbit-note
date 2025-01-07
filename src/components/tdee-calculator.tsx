const TdeeCalculator = () => {
  return (
    <form>
      <fieldset className="fieldset w-xs md:w-xl bg-base-200 border border-base-300 p-4 rounded-box">
        <legend className="fieldset-legend text-xl md:text-2xl">Calcolo TDEE</legend>
        <fieldset className="fieldset w-xs p-1">
          <legend className="fieldset-legend md:text-xl">Seleziona il sesso biologico</legend>
          <input type="text" className="input" placeholder="My awesome page" />
          <p className="fieldset-label">
            You can edit page title later on from settings
          </p>
        </fieldset>
      </fieldset>
    </form>
  );
};

export default TdeeCalculator;
