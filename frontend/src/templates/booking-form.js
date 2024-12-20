const BookingForm = (
  countriesList,
  bookingOption,
  bookingData,
  selectedFlightsData
) => {
  let tax = bookingOption.price * 0.05;
  let subtotal = bookingOption.price - tax;
  let adults = bookingData.adults || 0;
  let children = bookingData.children || 0;
  let infants = bookingData.infants_in_seat || 0;
  let flightsLength = selectedFlightsData[0].flights.length;
  let numOfPassengers =
    parseInt(adults) + parseInt(children) + parseInt(infants);

  let departureDate = formatDate(
    selectedFlightsData[0].flights[0].departure_airport.time
  );
  let arrivalDate = "";
  selectedFlightsData[0].flights.length > 1
    ? (arrivalDate = formatDate(
        selectedFlightsData[1].flights[0].departure_airport.time
      ))
    : (arrivalDate = formatDate(
        selectedFlightsData[1].flights[0].departure_airport.time
      ));

  return ` 
<div class="container-sm p-3 border flight-booking">
      <div class="card p-3">
        <div class="row">
          <div>
            <h4>Flight Summary</h4>
          </div>
        </div>
      </div>
      <section class="flight-summary-section">
        <div class="form-content margin mt-2">
          <div class="row">
            <div class="col-6">
              <div class="card p-3 h-100">
                <div class="d-flex justify-content-between align-items-center">
                  <div class="">
                    <span>${selectedFlightsData[0].type}</span
                    ><span>
                      - <span>${numOfPassengers}</span> passenger(s)</span
                    >
                  </div>
                  <div class="">
                    <button class="btn btn-revise">
                      <i class="bi bi-pencil-square"></i> Revise Trip
                    </button>
                  </div>
                </div>
                <div class="">
                  <div class="card p-3 mt-3">
                    <div class="data">
                      <span class="fw-bold"
                        >${
                          selectedFlightsData[0].flights[0].departure_airport
                            .name
                        } - ${
    selectedFlightsData[0].flights[0].departure_airport.id
  }</span
                      >
                    </div>
                    <div class="subdata">
                      <span class="">${departureDate}</span>
                    </div>
                  </div>
                  <div class="card p-3 mt-3">
                    <div class="data">
                      <span class="fw-bold"
                        >${
                          selectedFlightsData[0].flights.length > 1
                            ? selectedFlightsData[0].flights[1].arrival_airport
                                .name
                            : selectedFlightsData[0].flights[0].arrival_airport
                                .name
                        } - ${
    selectedFlightsData[0].flights.length > 1
      ? selectedFlightsData[0].flights[1].arrival_airport.id
      : selectedFlightsData[0].flights[0].arrival_airport.id
  }</span
                      >
                    </div>
                    <div class="subdata">${arrivalDate}</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-6">
              <div class="card p-3">
                <div class="p-3 card">
                  <div class="row">
                    <div class="col-6">Fare</div>
                    <div class="col-6"><span>CAD $${subtotal}</span></div>
                  </div>
                  <div class="row py-3">
                    <div class="col-6">Taxes and fees</div>
                    <div class="col-6">
                      <span>CAD $${tax.toFixed(2)}</span>
                    </div>
                  </div>
                  <div class="row pb-2">
                    <div class="col-6">Total</div>
                    <div class="col-6">
                      <span>CAD $${bookingOption.price}</span>
                    </div>
                  </div>
                  <div>
                    <span class="subdata"
                      >Includes taxes and carrier-imposed fees
                    </span>
                  </div>
                </div>
                <div class="pt-3 row text-center">
                  <div class="d-flex flex-column gap-1 col-6">
                    <span class="fw-bold">Already a member?</span>
                    <button class="btn btn-outline-dark btn-signin w-75 m-auto">
                      Sign In
                    </button>
                  </div>
                  <div class="d-flex flex-column gap-1 col-6">
                    <span class="fw-bold">or</span>
                    <button class="btn btn-checkout btn-dark w-75 m-auto">
                      Checkout as a Guest
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- Login Form -->
      <div
        class="container-sm p-3 border mt-3 d-none"
        id="signin-form-container"
      >
        <section class="vh-75">
          <div class="container py-3 h-100">
            <div class="row d-flex justify-content-center pt-3 h-100">
              <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                <div class="card login-card" style="border-radius: 1rem">
                  <div class="card-body py-3 px-5 text-center">
                    <form id="signin-form">
                      <div class="mb-md-5 mt-md-4 pb-2">
                        <h2 class="fw-bold mb-2 text-uppercase">Login</h2>
                        <p class="mb-5">
                          Please enter your login and password!
                        </p>

                        <div
                          data-mdb-input-init
                          class="form-outline form-white mb-4"
                        >
                          <input
                            type="text"
                            id="login-username"
                            name="login-username"
                            placeholder="username"
                            class="form-control form-control-lg"
                          />
                          <div
                            id="invalid-login-username"
                            class="invalid-feedback text-dark"
                          >
                            <i class="bi bi-exclamation-triangle"></i>
                            <span class="">Invalid Username</span>
                          </div>
                        </div>

                        <div
                          data-mdb-input-init
                          class="form-outline form-white mb-4"
                        >
                          <input
                            placeholder="password"
                            type="password"
                            name="login-password"
                            id="login-password"
                            class="form-control form-control-lg"
                          />
                          <div
                            id="invalid-login-password"
                            class="invalid-feedback text-dark"
                          >
                            <i class="bi bi-exclamation-triangle"></i>
                            <span>Invalid Password</span>
                          </div>
                        </div>

                        <p class="small mb-3 pb-lg-2">
                          <a class="text-dark" href="#!">Forgot password?</a>
                        </p>

                        <button
                          class="btn btn-dark btn-lg px-5 btn-submit"
                          type="submit"
                        >
                          Login
                        </button>

                        <div
                          class="d-flex justify-content-center text-center mt-4 pt-1"
                        >
                          <a href="#!" class="text-dark"
                            ><i class="fab fa-facebook-f fa-lg"></i
                          ></a>
                          <a href="#!" class="text-dark"
                            ><i class="fab fa-twitter fa-lg mx-4 px-2"></i
                          ></a>
                          <a href="#!" class="text-dark"
                            ><i class="fab fa-google fa-lg"></i
                          ></a>
                        </div>
                      </div>

                      <div>
                        <p class="mb-0">
                          Don't have an account?
                          <a href="#!" class="fw-bold">Sign Up</a>
                        </p>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div class="section-header py-3 border-bottom border-secondary-subttle">
        <div class="card p-3">
          <div class="row">
            <div class="col-9">
              <h4>Primary Passenger</h4>
            </div>
            <div class="col-3">
              <select class="form-select">
                <option value="Adult" selected>
                  Adult (12 years and older)
                </option>
                <option value="Child">Child (2-12 years old)</option>
                <option value="Infant">Infant (Up to 2 years old)</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div class="sections-container">
        <div>
          <div
            class="border-start-5 alert alert-info d-flex align-items-center"
            role="alert"
          >
            <i class="bi bi-info-circle-fill me-3"></i>
            <span>
              To avoid boarding complications, enter all names and surnames
              <strong>exactly as they appear in your passport/ID.</strong>
            </span>
          </div>
        </div>
        <section class="border-bottom">
          <div class="form-content margin">
            <div class="main-passenger-row">
              <div class="row">
                <div class="col-6">
                  <div class="card p-3">
                    <div class="">
                      <label for="name" class="form-label"> Name </label>
                      <input type="text" class="form-control" id="name" />
                      <div id="invalid-name" class="invalid-feedback">
                        <i class="bi bi-exclamation-triangle"></i>
                        <span>Invalid Name</span>
                      </div>
                    </div>
                    <div class="py-3">
                      <label for="middle-name" class="form-label text-black-50">
                        Middle Name (optional)
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="middle-name"
                      />
                    </div>
                    <div class="">
                      <label for="last-name" class="form-label">
                        Last Name
                      </label>
                      <input type="text" class="form-control" id="last-name" />
                      <div id="invalid-last-name" class="invalid-feedback">
                        <i class="bi bi-exclamation-triangle"></i>
                        <span>Invalid Last Name</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-6">
                  <div class="card p-3">
                    <div class="">
                      <label for="nationality" class="form-label">
                        Nationality
                      </label>
                      <div class="input-group">
                        <span class="input-group-text">
                          <i class="bi bi-globe-americas"></i>
                        </span>
                        <input
                          type="text"
                          class="form-control"
                          list="nationality-options"
                          id="nationality"
                        />
                        <div id="invalid-nationality" class="invalid-feedback">
                          <i class="bi bi-exclamation-triangle"></i>
                          <span>Invalid Nationality</span>
                        </div>
                        <datalist id="nationality-options"></datalist>
                      </div>
                    </div>
                    <div class="py-3">
                      <label for="gender" class="form-label"> Gender </label>
                      <div class="input-group">
                        <span class="input-group-text">
                          <i class="bi bi-gender-ambiguous"></i>
                        </span>
                        <select class="form-control form-select" id="gender">
                          <option value="0">Select...</option>
                          <option value="M">Male</option>
                          <option value="F">Female</option>
                        </select>
                      </div>
                    </div>

                    <div class="">
                      <label for="birth-date" class="form-label">
                        Date of Birth
                      </label>
                      <div class="input-group">
                        <span class="input-group-text">
                          <i class="bi-calendar"></i>
                        </span>
                        <input
                          type="date"
                          class="form-control"
                          id="birth-date"
                        />
                        <div id="invalid-birth-date" class="invalid-feedback">
                          <i class="bi bi-exclamation-triangle"></i>
                          <span>Invalid Date</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="registration-suggestion py-3">
                <div
                  class="border-start-5 alert alert-info d-flex align-items-center"
                  role="alert"
                >
                  <i class="bi bi-info-circle-fill me-3"></i>
                  <span
                    >Want to
                    <a
                      href="#register-button-container"
                      class="link-registration fw-bold"
                      >register</a
                    >
                    for a better experience?</span
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="pt-4">
            <div class="card p-3">
              <h4 class="pb-3">Check your baggage</h4>
            </div>
            <div class="py-3">
              <div
                class="border-start-5 alert alert-info d-flex align-items-center"
                role="alert"
              >
                <i class="bi bi-info-circle-fill me-3"></i>
                <span>
                  Make sure to check the dimenssions and weight for the carry-on
                  baggage allowance
                </span>
              </div>
            </div>
            <div>
              <div class="container card p-3">
                <div class="card p-3 mb-3">
                  <div class="row">
                    <div class="col-8">
                      <div class="data">
                        <h5>Carry-on baggage</h5>
                      </div>
                      <div class="subdata">
                        <i class="bi bi-backpack text-success"></i> 1 Added
                        suitcase (15 kg), per passenger, round trip
                      </div>
                    </div>
                    <div class="col-4"></div>
                  </div>
                </div>
                <div class="card p-3 mb-3">
                  <div class="row">
                    <div class="col-8">
                      <div class="data">
                        <h5>Checked baggage</h5>
                      </div>
                      <div class="subdata">
                        <i
                          class="bi bi-suitcase2 text-danger icon-checked-baggage"
                        ></i>
                        <span class="added-checked-baggage">Not included</span>
                      </div>
                    </div>
                    <div class="col-2 text-center">
                      <input
                        type="number"
                        class="form-control checked-baggage-count"
                        value="0"
                      />
                    </div>
                    <div class="col-2 text-center">
                      <button class="btn btn-dark px-5 btn-add-checked-baggage">
                        Add
                      </button>
                    </div>
                  </div>
                </div>
                <div class="card p-3">
                  <div class="row">
                    <div class="col-8">
                      <div class="data">
                        <h5>Special baggage</h5>
                      </div>
                      <div class="subdata">
                        <i
                          class="bi bi-suitcase2 text-danger icon-special-baggage"
                        ></i>
                        <span class="added-special-baggage">Not included</span>
                      </div>
                    </div>
                    <div class="col-2 text-center">
                      <input
                        type="number"
                        class="form-control special-baggage-count"
                        value="0"
                      />
                    </div>
                    <div class="col-2 text-center">
                      <button class="btn btn-dark px-5 btn-add-special-baggage">
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </section>

        <div class="card mt-4">
          <div class="p-3">
            <h4>Contact & additional information</h4>
          </div>
        </div>
        <div class="pt-3">
          <div
            class="border-start-5 alert alert-info d-flex align-items-center"
            role="alert"
          >
            <i class="bi bi-info-circle-fill me-3"></i>
            <span>
              Information provided should be for the primary passenger.
            </span>
          </div>
        </div>
        <section class="py-3">
          <div class="card p-3">
            <div class="row">
              <div class="col-6">
                <div>
                  <label class="form-label" for="phone-type">
                    Phone Type
                  </label>
                  <select class="form-select" id="phone-type">
                    <option value="Mobile" selected>Mobile</option>
                    <option value="Home">Home</option>
                    <option value="Office">Office</option>
                  </select>
                </div>
                <div class="py-3">
                  <label class="form-label" for="phone-number">
                    Phone Number
                  </label>
                  <div class="input-group">
                    <select
                      class="form-select input-group-text select-dial-code"
                    >
                      ${countriesList
                        .map((country) => {
                          const suffix =
                            country.idd &&
                            country.idd.suffixes &&
                            country.idd.suffixes.length > 0
                              ? country.idd.suffixes[0]
                              : "";
                          return `
                      <option value="${country.idd.root}" class="country-codes">
                        ${country.name.common} (${country.idd.root}${suffix})
                      </option>
                      `;
                        })
                        .join()}
                    </select>
                    <input
                      type="text"
                      class="form-control"
                      id="phone-number"
                      placeholder="10-digit-number"
                    />
                    <div
                      id="invalid-phone-number"
                      class="invalid-feedback text-dark"
                    >
                      <i class="bi bi-exclamation-triangle"></i>
                      <span>Invalid Phone Number</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-6">
                <div>
                  <label class="form-label" for="airmiles">
                    Airmiles or other program (optional)
                  </label>
                  <select class="form-select" id="airmiles">
                    <option value="Mobile" selected>Mobile</option>
                    <option value="Home">Home</option>
                    <option value="Office">Office</option>
                  </select>
                </div>
                <div class="py-3">
                  <label class="form-label" for="email">
                    Email<span class="text-danger">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="youremail@example.com"
                    class="form-control"
                  />
                  <div id="invalid-email" class="invalid-feedback text-danger">
                    <i class="bi bi-exclamation-triangle"></i>
                    <span>Invalid email</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="d-none" id="register-button-container">
              <div class="row">
                <div class="col-6">
                  <div class="py-3">
                    <label class="form-label" for="username">
                      Username<span class="text-danger">*</span>
                    </label>
                    <input type="text" id="username" class="form-control" />
                    <div
                      id="invalid-username"
                      class="invalid-feedback text-danger"
                    >
                      <i class="bi bi-exclamation-triangle"></i>
                      <span>Invalid username</span>
                    </div>
                  </div>
                </div>
                <div class="col-6">
                  <div class="py-3">
                    <label class="form-label" for="password">
                      Password<span class="text-danger">*</span>
                    </label>
                    <input type="text" id="password" class="form-control" />
                    <div
                      id="invalid-password"
                      class="invalid-feedback text-danger"
                    >
                      <i class="bi bi-exclamation-triangle"></i>
                      <span>Invalid Password</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="w-50 m-auto pt-3">
                <button class="btn btn-dark btn-register w-100">
                  Register
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>`;
};

function formatDate(dateString) {
  const date = new Date(dateString);

  return (
    date.toLocaleDateString("en-US", {
      weekday: "long", // Full weekday name
      day: "numeric", // Numeric day of the month
      month: "long", // Full month name
      year: "numeric", // Full year
    }) +
    ` - ${date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    })}`
  );
}

export default BookingForm;
