import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';


describe('update function', () => {
  test('should update lines and columns when valid values are provided', () => {
    render(<App />);

    const columnsInput = screen.getByTestId<HTMLInputElement>("Columns");
    const linesInput = screen.getByTestId<HTMLInputElement>("Lines");

    fireEvent.change(columnsInput, { target: { value: "3" } });
    fireEvent.change(linesInput, { target: { value: "4" } });

    const updateButton = screen.getByText("Create");
    fireEvent.click(updateButton);

    //screen.logTestingPlaygroundURL(); only for development

    const rows = screen.getAllByTestId("row");
    const columns = screen.getAllByTestId("column");

    // Assert that lines and columns have been updated correctly
    expect(columnsInput.value).toBe("3");
    expect(linesInput.value).toBe("4");
    expect(parseInt(columnsInput.value) * parseInt(linesInput.value)).toBe(columns.length);
    expect(parseInt(columnsInput.value) * rows.length).toBe(columns.length);
  });

  test('should show an error when invalid columns value is provided', () => {
    render(<App />);

    const columnsInput = screen.getByTestId<HTMLInputElement>('Columns');
    const linesInput = screen.getByTestId<HTMLInputElement>('Lines');

    fireEvent.change(columnsInput, { target: { value: '-3' } });
    fireEvent.change(linesInput, { target: { value: '4' } });

    const updateButton = screen.getByText('Create');
    fireEvent.click(updateButton);


    const error = screen.getByTestId<HTMLInputElement>('error');

    // Assert that an alert is shown
    expect(error.textContent).toBe('Please enter valid columns'); // Lines value should remain unchanged

  });

  test('should show an error when invalid lines value is provided', () => {
    render(<App />);

    const columnsInput = screen.getByTestId<HTMLInputElement>('Columns');
    const linesInput = screen.getByTestId<HTMLInputElement>('Lines');

    fireEvent.change(columnsInput, { target: { value: '3' } });
    fireEvent.change(linesInput, { target: { value: '-4' } });

    const updateButton = screen.getByText('Create');
    fireEvent.click(updateButton);


    const error = screen.getByTestId<HTMLInputElement>('error');

    // Assert that an alert is shown
    expect(error.textContent).toBe('Please enter valid lines'); // Lines value should remain unchanged

  });

});
