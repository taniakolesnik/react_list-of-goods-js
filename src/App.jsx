import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';

export const goodsFromServer = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

let visibleGoods = [...goodsFromServer];

const SORT_NAME = 'alphabetically';
const SORT_LENGTH = 'length';
const SORT_RESET = '';

export const App = () => {
  const [sortField, setSortField] = useState(SORT_RESET);
  const [reverse, setReverse] = useState(false);

  if (sortField === SORT_RESET) {
    visibleGoods = [...goodsFromServer];
  } else {
    visibleGoods.sort((good1, good2) => {
      if (sortField === SORT_LENGTH) {
        return good1.length - good2.length;
      }

      if (sortField === SORT_NAME) {
        return good1.localeCompare(good2);
      }

      if (reverse) {
        return -1;
      }

      return 0;
    });
  }

  return (
    <div className="section content">
      <div className="buttons">
        <button
          type="button"
          className={`button is-info ${sortField === SORT_NAME ? '' : 'is-light'}`}
          onClick={() => {
            setSortField(SORT_NAME);
          }}
        >
          Sort alphabetically
        </button>

        <button
          type="button"
          className={`button is-info ${sortField === SORT_LENGTH ? '' : 'is-light'}`}
          onClick={() => {
            setSortField(SORT_LENGTH);
          }}
        >
          Sort by length
        </button>

        <button
          type="button"
          className={`button is-info ${reverse ? '' : 'is-light'}`}
          onClick={() => {
            setReverse(!reverse);
          }}
        >
          Reverse
        </button>
        {(sortField !== SORT_RESET || reverse) && (
          <button
            type="button"
            className="button is-danger is-light"
            onClick={() => {
              setSortField(SORT_RESET);
              setReverse(false);
            }}
          >
            Reset
          </button>
        )}
      </div>

      <ul>
        {visibleGoods.map(good => (
          <li key={good} data-cy="Good">
            {good}
          </li>
        ))}
      </ul>
    </div>
  );
};
