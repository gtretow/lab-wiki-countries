import React from 'react';
import { Link } from 'react-router-dom';
import { Switch } from 'react-router-dom';

function CountriesList(props) {
  return (
    <div>
      <Switch>
        {props.countries.map((countries) => (
          <div key={props.countries.cca3} className="list-group">
            <span role="img" aria-label="xxxxx">
              <Link
                className="list-group-item list-group-item-action"
                to={countries.cca3}
              >
                <img
                  src="https://www.countryflags.io/aw/flat/64.png"
                  alt="whatever"
                  className="img-responsive"
                />
              </Link>

              <Link
                className="list-group-item list-group-item-action"
                to={countries.cca3}
              >
                <img
                  src="https://www.countryflags.io/af/flat/64.png"
                  alt="whatever"
                  className="img-responsive"
                />
              </Link>
              <Link
                className="list-group-item list-group-item-action"
                to={countries.cca3}
              >
                <img
                  src="https://www.countryflags.io/ao/flat/64.png"
                  alt="whatever"
                  className="img-responsive"
                />
              </Link>
              <Link
                className="list-group-item list-group-item-action"
                to={countries.cca3}
              >
                <img
                  src="https://www.countryflags.io/ai/flat/64.png"
                  alt="whatever"
                  className="img-responsive"
                />
              </Link>
              <Link
                className="list-group-item list-group-item-action"
                to={countries.cca3}
              >
                <img
                  src="https://www.countryflags.io/ax/flat/64.png"
                  alt="whatever"
                  className="img-responsive"
                />
              </Link>
              <Link
                className="list-group-item list-group-item-action"
                to={countries.cca3}
              >
                <img
                  src="https://www.countryflags.io/al/flat/64.png"
                  alt="whatever"
                  className="img-responsive"
                />
              </Link>
              <Link
                className="list-group-item list-group-item-action"
                to={countries.cca3}
              >
                <img
                  src="https://www.countryflags.io/ad/flat/64.png"
                  alt="whatever"
                  className="img-responsive"
                />
              </Link>
              <Link
                className="list-group-item list-group-item-action"
                to={countries.cca3}
              >
                <img
                  src="https://www.countryflags.io/ae/flat/64.png"
                  alt="whatever"
                  className="img-responsive"
                />
              </Link>
              <Link
                className="list-group-item list-group-item-action"
                to={countries.cca3}
              >
                <img
                  src="https://www.countryflags.io/ar/flat/64.png"
                  alt="whatever"
                  className="img-responsive"
                />
              </Link>
              <Link
                className="list-group-item list-group-item-action"
                to={countries.cca3}
              >
                <img
                  src="https://www.countryflags.io/am/flat/64.png"
                  alt="whatever"
                  className="img-responsive"
                />
              </Link>
              <Link
                className="list-group-item list-group-item-action"
                to={countries.cca3}
              >
                <img
                  src="https://www.countryflags.io/as/flat/64.png"
                  alt="whatever"
                  className="img-responsive"
                />
              </Link>
              <Link
                className="list-group-item list-group-item-action"
                to={countries.cca3}
              >
                <img
                  src="https://www.countryflags.io/aq/flat/64.png"
                  alt="whatever"
                  className="img-responsive"
                />
              </Link>
              <Link
                class="list-group-item list-group-item-action"
                to={countries.cca3}
              >
                <img
                  src="https://www.countryflags.io/fk/flat/64.png"
                  alt="whatever"
                  className="img-responsive"
                />
              </Link>
              <Link
                class="list-group-item list-group-item-action active"
                to={countries.cca3}
              >
                <img
                  src="https://www.countryflags.io/fr/flat/64.png"
                  alt="whatever"
                  className="img-responsive"
                />
              </Link>
              <Link
                class="list-group-item list-group-item-action"
                to={countries.cca3}
              >
                <img
                  src="https://www.countryflags.io/zw/flat/64.png"
                  alt="whatever"
                  className="img-responsive"
                />
              </Link>
            </span>
          </div>
        ))}
      </Switch>
    </div>
  );
}

export default CountriesList;
