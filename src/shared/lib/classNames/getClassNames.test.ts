import { getClassNames } from './getClassNames';

describe('getClassNames', () => {
  it('returns the base class when no additional or modifier classes are provided', () => {
    const result = getClassNames('baseClass');

    expect(result).toBe('baseClass');
  });

  it('includes additional classes when provided', () => {
    const result = getClassNames('baseClass', ['additionalClass1', 'additionalClass2']);

    expect(result).toBe('baseClass additionalClass1 additionalClass2');
  });

  test('includes modifier classes when provided with truthy values', () => {
    const result = getClassNames('baseClass', [], { hovered: true, scrollable: true });

    expect(result).toBe('baseClass hovered scrollable');
  });

  it('with one true mod and one false mod', () => {
    const expectedResult = 'someClass scrollable';

    expect(getClassNames('someClass', [], { hovered: false, scrollable: true })).toBe(expectedResult);
  });

  it('does not include modifier classes when provided with falsy values', () => {
    const result = getClassNames('baseClass', [], { hovered: false, scrollable: true });

    expect(result).toBe('baseClass scrollable');
  });

  it('should remove undefined typeof string from passed additional classes', () => {
    const result = getClassNames('btn', ['undefined', 'clear']);

    expect(result).toBe('btn clear');
  });
});
