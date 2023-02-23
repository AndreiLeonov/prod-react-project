import { classNames } from 'shared/lib/classNames/classNames';

describe('classNames', () => {
    test('with only first param', () => {
        expect(classNames('someClass')).toBe('someClass');
    });
    test('with additional class', () => {
        const expectedResult = 'someClass cls1 cls2';
        expect(classNames('someClass', {}, ['cls1', 'cls2'])).toBe(expectedResult);
    });
    test('with mods class', () => {
        const expectedResult = 'someClass cls1 cls2 isTest isTest3';
        expect(classNames(
            'someClass',
            { isTest: true, isTest2: false, isTest3: true },
            ['cls1', 'cls2'],
        ))
            .toBe(expectedResult);
    });
});
