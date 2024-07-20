import CONSTANTS from "./../../../constants";

const { USER_FIELDS } = CONSTANTS;

function FilterPanel({ fieldsFilter, setFieldsFilter }) {
  const changeFilter = ({ target: { checked } }, fieldName) => {
    const copyFilter = [...fieldsFilter];
    // якщо обраний фільтр є в списку обраних - видаляємо
    // інакше додаємо
    if (!checked) {
      const foundIndex = copyFilter.findIndex(f => f === fieldName);
      copyFilter.splice(foundIndex, 1);
    } else {
      copyFilter.push(fieldName);
    }
    setFieldsFilter(copyFilter);
  };

  return (
    <section>
      <h2>Filters</h2>
      <fieldset>
        <legend>Set required info:</legend>
        {USER_FIELDS.map(({ fieldName, caption }) => (
          <div>
            <label key={fieldName}>
              {/* якщо поточне значення фільтру є в переліку можливих, 
                       тоді   checked - true  (галочка стоїть) 
                       інакше checked - false (галочка не стоїть) */}
              <input
                type="checkbox"
                checked={fieldsFilter.includes(fieldName)}
                onChange={e => {
                  changeFilter(e, fieldName);
                }}
              />
              <span>{caption}</span>
            </label>
          </div>
        ))}
      </fieldset>
    </section>
  );
}

export default FilterPanel;
