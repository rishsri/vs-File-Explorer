export const explorer = {
  id: 1,
  name: 'root',
  isFolder: true,
  items: [
    {
      id: 2,
      name: 'public',
      isFolder: true,
      items: [
        {
          id: 3,
          name: 'public nested 1',
          isFolder: true,
          items: [
            {
              id: 4,
              name: 'index',
              isFolder: false,
              items: [],
            },
            {
              id: 4,
              name: 'hello.html',
              isFolder: false,
              items: [],
            },
          ],
        },
      ],
    },
    {
      id: 10,
      name: 'components',
      isFolder: true,
      items: [
        {
          id: 5,
          name: 'components nested 1',
          isFolder: true,
          items: [
            {
              id: 7,
              name: 'components index',
              isFolder: false,
              items: [],
            },
            {
              id: 9,
              name: 'hello.html',
              isFolder: false,
              items: [],
            },
          ],
        },
      ],
    },
  ],
};
