# jestt

# Great Exceptions

```js
describe('Operations', () => {
  it('should demonstrate all expect possibilities', () => {
    const response = {
      status: 200,
      body: [
        { id: 1, name: 'Test 1', active: true },
        { id: 2, name: 'Test 2', active: false }
      ],
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const content = 'Olá, Axel! Este é um conteúdo de teste';

    // 1. Verificações básicas de valor
    expect(response.status).toBe(200);
    expect(response.status).toEqual(200);
    expect(response.status).toStrictEqual(200); // Melhor para comparação estrita
    expect(response.body.length).toBe(2);

    // 2. Verificações de tipo
    expect(response.body).toBeInstanceOf(Array);
    expect(Number(response.body[0].id)).toBe(1);
    expect(typeof content).toBe('string');
    expect(content).toBeDefined();
    expect(null).toBeNull();
    expect(undefined).toBeUndefined();
    expect(NaN).toBeNaN();

    // 3. Verificações de objetos/arrays
    expect(response.body[0]).toHaveProperty('id');
    expect(response.body[0]).toHaveProperty('name', 'Test 1');
    expect(response.body).toContainEqual({ id: 2, name: 'Test 2', active: false });
    expect(response.body).toEqual(expect.arrayContaining([expect.objectContaining({ id: 1 })]));

    // 4. Verificações de strings
    expect(content).toContain('Axel');
    expect(content).toMatch(/Axel/);
    expect(content).toMatch('Axel');
    expect(content).toMatch(new RegExp('axel', 'i')); // Case insensitive
    expect(content).not.toMatch('inexistente');

    // 5. Verificações numéricas
    expect(response.body.length).toBeGreaterThan(0);
    expect(response.body.length).toBeGreaterThanOrEqual(2);
    expect(response.body.length).toBeLessThan(3);
    expect(response.body.length).toBeLessThanOrEqual(2);
    expect(3.14159).toBeCloseTo(3.14, 2); // Para números decimais

    // 6. Verificações booleanas
    expect(response.body[0].active).toBeTruthy();
    expect(response.body[1].active).toBeFalsy();
    expect(true).toBe(true);

    // 7. Verificações de erros/exceções
    expect(() => { throw new Error('Erro!') }).toThrow();
    expect(() => { throw new Error('Erro específico') }).toThrow('específico');
    expect(() => { throw new Error('Erro') }).toThrow(Error);

    // 8. Snapshots (útil para testes de UI ou respostas complexas)
    expect(response.body).toMatchSnapshot();

    // 9. Verificações de arrays
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body).toHaveLength(2);
    expect(response.body.map(item => item.id)).toEqual([1, 2]);

    // 10. Verificações de objetos
    expect(response.headers).toEqual({
      'Content-Type': 'application/json'
    });
    expect(response.body[0]).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        name: expect.stringMatching(/Test/)
      })
    );

    // 11. Verificações com mock functions
    const mockFn = jest.fn();
    mockFn('test');
    expect(mockFn).toHaveBeenCalled();
    expect(mockFn).toHaveBeenCalledWith('test');
    expect(mockFn).toHaveBeenCalledTimes(1);

    // 12. Verificações assíncronas (precisa async/await no it())
    // Exemplo com Promises:
    // await expect(Promise.resolve('value')).resolves.toBe('value');
    // await expect(Promise.reject('error')).rejects.toMatch('error');
  });

  // Exemplo de teste assíncrono
  it('should test async code', async () => {
    await expect(Promise.resolve(123)).resolves.toBe(123);
    await expect(Promise.reject(new Error('error'))).rejects.toThrow('error');
  });
});



```


# Verificação de tipos complexos:

```javascript
expect({
  id: 1,
  name: 'Test',
  details: {
    active: true,
    roles: ['admin', 'user']
  }
}).toEqual({
  id: expect.any(Number),
  name: expect.stringContaining('es'),
  details: expect.objectContaining({
    active: true
  })
});


```

# Verificação de arrays complexos:

```javascript
expect([
  { id: 1, name: 'A' },
  { id: 2, name: 'B' }
]).toEqual([
  expect.objectContaining({ id: 1 }),
  expect.objectContaining({ name: 'B' })
]);

```

# Negando verificações:

```js
expect('text').not.toContain('xxx');
expect(5).not.toBeGreaterThan(10);
```javascript

# Verificações com expressões regulares:

```javascript
expect('Hello World').toMatch(/^Hello/);
expect('user@example.com').toMatch(/\S+@\S+\.\S+/);

```

# Async/Await
Alternatively, you can use async and await in your tests. To write an async test, use the async keyword in front of the function passed to test. For example, the same fetchData scenario can be tested with:

```js

  test('the data is peanut butter', async () => {
    const data = await fetchData();
    expect(data).toBe('peanut butter');
  });

  test('the fetch fails with an error', async () => {
    expect.assertions(1);
    try {
      await fetchData();
    } catch (error) {
      expect(error).toMatch('error');
    }
  });


  test('the fetch fails with an error', async () => {
      await expect(fetchData()).rejects.toMatch('error');
  });

```