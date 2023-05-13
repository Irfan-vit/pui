import styled from 'styled-components'
const StyledSelect = styled.select`
  outline: none;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: var(--font-md);
  font-weight: var(--font-weight-normal);
  border-radius: var(--border-size4);
  padding: var(--spacing-unit);
  color: ${(props) => props.theme.offSetText};
  border: 1px solid ${(props) => props.theme.offSetText};
  appearance: none;
  :focus {
    border: 1px solid ${(props) => props.theme.action};
    outline: none;
  }
`
const Select = () => {
  return (
    <form action="">
      <label
        htmlFor="categories"
        onSubmit={(e) => {
          e.preventDefault()
        }}
      >
        <StyledSelect name="categories" id="categories">
          <option value="select">categories</option>
          <option value="cat1">cat1</option>
          <option value="cat2">cat2</option>
          <option value="cat3">cat3</option>
          <option value="cat4">cat4</option>
        </StyledSelect>
      </label>
    </form>
  )
}
export default Select
