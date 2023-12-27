import { useForm, SubmitHandler } from "react-hook-form"
import { IFormInput } from "../interfaces/IFormInput"

export const Form = () => {
  const { register, handleSubmit } = useForm<IFormInput>()
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log('data', data)

  const getDataForm = () => {
    console.log('data')
  }

  return (
    <form
      id="form-programacion-anual-aprendizaje"
      onSubmit={handleSubmit(onSubmit)}
      data-select2-id="form-programacion-anual-aprendizaje"
    >
      <div className="modal-body info" data-select2-id="263">
        <div
          className="informacion-session-prog-anual"
          data-select2-id="262"
        >
          <div className="row" data-select2-id="261">
            <div className="col-12 col-lg-3">
              <small className="form-text text-muted">Docente:</small>
              <input
                title="docente"
                type="text"
                className="form-control"
                id="docenteProgAnual"
                disabled={false}
                {...register("docenteProgAnual")}
              />
            </div>
            <div className="col-12 col-lg-3" data-select2-id="260">
              <small className="form-text text-muted">
                Niveles, grados y aulas:
              </small>
              <select
                className="form-control select2-hidden-accessible"
                id="aulaProgAnual"
                tabIndex={-1}
                aria-hidden="true"
                data-select2-id="aulaProgAnual"
                {...register("aulaProgAnual")}
              >
                <option value="aula-4869" data-select2-id="274">
                  1° Secundaria A
                </option>
              </select>
              <span
                className="select2 select2-container select2-container--bootstrap4 select2-container--below"
                dir="ltr"
                data-select2-id="272"
                style={{ width: '100%' }}
              >
                <span className="selection">
                  <span
                    className="select2-selection select2-selection--single"
                    role="combobox"
                    aria-haspopup="true"
                    aria-expanded="false"
                    tabIndex={0}
                    aria-disabled="false"
                    aria-labelledby="select2-aulaProgAnual-container"
                  >
                    <span
                      className="select2-selection__rendered"
                      id="select2-aulaProgAnual-container"
                      role="textbox"
                      aria-readonly="true"
                      title="1° Secundaria A"
                    >
                      1° Secundaria A
                    </span>
                    <span
                      className="select2-selection__arrow"
                      role="presentation"
                    >
                      <b role="presentation"></b>
                    </span>
                  </span>
                </span>
                <span
                  className="dropdown-wrapper"
                  aria-hidden="true"
                ></span>
              </span>
            </div>
            <div className="col-12 col-lg-3" data-select2-id="363">
              <small className="form-text text-muted">Curso:</small>
              <select
                className="form-control select2-hidden-accessible"
                id="cursoProgAnual"
                tabIndex={-1}
                aria-hidden="true"
                data-select2-id="cursoProgAnual"
                {...register("cursoProgAnual")}
              >
                <option value="curso-1305" data-select2-id="320">
                  Secundaria Álgebr /a
                </option>
                <option value="curso-1306" data-select2-id="321">
                  Secundaria Aritmética
                </option>
                <option value="curso-1271" data-select2-id="322">
                  Secundaria Arte y Cultura
                </option>
                <option value="curso-1291" data-select2-id="323">
                  Secundaria Biología
                </option>
                <option value="curso-1292" data-select2-id="324">
                  Secundaria Ciencia y Tecnología
                </option>
                <option value="curso-1284" data-select2-id="325">
                  Secundaria Ciencias Sociales
                </option>
                <option value="curso-1285" data-select2-id="326">
                  Secundaria Cívica
                </option>
                <option value="curso-1294" data-select2-id="327">
                  Secundaria Cívica
                </option>
                <option value="curso-1273" data-select2-id="328">
                  Secundaria Competencia Lingüística
                </option>
                <option value="curso-1274" data-select2-id="329">
                  Secundaria Comprensión Lingüística
                </option>
                <option value="curso-1302" data-select2-id="330">
                  Secundaria Computación
                </option>
                <option value="curso-1275" data-select2-id="331">
                  Secundaria Comunicación
                </option>
                <option value="curso-1272" data-select2-id="332">
                  Secundaria Danza y música
                </option>
                <option value="curso-1295" data-select2-id="333">
                  Secundaria Desarrollo Cívico y Ciudadano
                </option>
                <option value="curso-1296" data-select2-id="334">
                  Secundaria Desarrollo Personal Ciudadanía y Cívica
                </option>
                <option value="curso-1286" data-select2-id="335">
                  Secundaria Economía
                </option>
                <option value="curso-1297" data-select2-id="336">
                  Secundaria Educación Familiar
                </option>
                <option value="curso-1301" data-select2-id="337">
                  Secundaria Educación física
                </option>
                <option value="curso-1300" data-select2-id="338">
                  Secundaria Educación Religiosa
                </option>
                <option value="curso-1298" data-select2-id="339">
                  Secundaria Filosofía
                </option>
                <option value="curso-1307" data-select2-id="340">
                  Secundaria Física
                </option>
                <option value="curso-1287" data-select2-id="341">
                  Secundaria Geografía
                </option>
                <option value="curso-1308" data-select2-id="342">
                  Secundaria Geometría
                </option>
                <option value="curso-1276" data-select2-id="343">
                  Secundaria Gramática
                </option>
                <option value="curso-1303" data-select2-id="344">
                  Secundaria Herramientas Digitales y Programación
                </option>
                <option value="curso-1288" data-select2-id="345">
                  Secundaria Historia
                </option>
                <option value="curso-1289" data-select2-id="346">
                  Secundaria Historia del Perú
                </option>
                <option value="curso-1290" data-select2-id="347">
                  Secundaria Historia Universal
                </option>
                <option value="curso-1304" data-select2-id="348">
                  Secundaria Ingles
                </option>
                <option value="curso-1277" data-select2-id="349">
                  Secundaria Lenguaje
                </option>
                <option value="curso-1278" data-select2-id="350">
                  Secundaria Literatura
                </option>
                <option value="curso-1311" data-select2-id="351">
                  Secundaria Matemática
                </option>
                <option value="curso-1279" data-select2-id="352">
                  Secundaria Normativa
                </option>
                <option value="curso-1280" data-select2-id="353">
                  Secundaria Ortografía y caligrafía
                </option>
                <option value="curso-1299" data-select2-id="354">
                  Secundaria Persona Familia y RRHH
                </option>
                <option value="curso-1281" data-select2-id="355">
                  Secundaria Plan Lector
                </option>
                <option value="curso-1293" data-select2-id="356">
                  Secundaria Química
                </option>
                <option value="curso-1310" data-select2-id="357">
                  Secundaria Razonamiento Matemático
                </option>
                <option value="curso-1282" data-select2-id="358">
                  Secundaria Razonamiento Verbal
                </option>
                <option value="curso-1283" data-select2-id="359">
                  Secundaria Redacción
                </option>
                <option value="curso-1309" data-select2-id="360">
                  Secundaria Trigonometría
                </option>
                <option value="curso-1312" data-select2-id="361">
                  Secundaria Tutoría
                </option>
              </select>
              <span
                className="select2 select2-container select2-container--bootstrap4 select2-container--below"
                dir="ltr"
                data-select2-id="319"
                style={{ width: '100%' }}
              >
                <span className="selection">
                  <span
                    className="select2-selection select2-selection--single"
                    role="combobox"
                    aria-haspopup="true"
                    aria-expanded="false"
                    tabIndex={0}
                    aria-disabled="false"
                    aria-labelledby="select2-cursoProgAnual-container"
                  >
                    <span
                      className="select2-selection__rendered"
                      id="select2-cursoProgAnual-container"
                      role="textbox"
                      aria-readonly="true"
                      title="Secundaria  Aritmética"
                    >
                      Secundaria Aritmética
                    </span>
                    <span
                      className="select2-selection__arrow"
                      role="presentation"
                    >
                      <b role="presentation"></b>
                    </span>
                  </span>
                </span>
                <span
                  className="dropdown-wrapper"
                  aria-hidden="true"
                ></span>
              </span>
            </div>
            <div className="col-12 col-lg-3">
              <br />
              <button className="mb-2 mr-2 btn-icon btn-pill btn btn-primary agregarPeriodo float-right">
                <i className="ion-android-add"> </i>
              </button>
            </div>
          </div>
        </div>
        <br />
        <div
          className="card mb-3 card-agregar-periodo"
          data-select2-id="959"
        >
          <div className="card-header">
            <div className="nav h-auto">
              <a
                data-toggle="tab"
                href="#tab-eg6-1"
                id="tab-anav-1"
                className="border-0 btn-transition btn btn-outline-primary show"
              >
                {' '}
                Periodo 1
              </a>
              <a
                data-toggle="tab"
                href="#tab-eg6-2"
                id="tab-anav-2"
                className="border-0 btn-transition btn btn-outline-primary show active"
              >
                {' '}
                Periodo 2
              </a>
            </div>
          </div>
          <div className="card-body" data-select2-id="958">
            <div className="tab-content" data-select2-id="957">
              <div
                className="tab-pane show"
                id="tab-eg6-1"
                role="tabpanel"
                data-select2-id="tab-eg6-1"
              >
                <fieldset
                  id="fieldset-item-1"
                  data-select2-id="fieldset-item-1"
                >
                  <div
                    className="prog-anual-periodo"
                    data-select2-id="967"
                  >
                    <div className="row" data-select2-id="966">
                      <div className="col" data-select2-id="965">
                        <small className="form-text text-muted">
                          Periodo:
                        </small>
                        <select
                          className="form-control periodoProgAnual select2-hidden-accessible"
                          tabIndex={-1}
                          aria-hidden="true"
                          data-select2-id="736"
                          {...register("periodo1PeriodoProgAnual")}
                        >
                          <option
                            value="ib"
                            data-select2-id="742"
                            selected
                          >
                            1° Bimestre
                          </option>
                          <option value="iib" data-select2-id="743">
                            2° Bimestre
                          </option>
                          <option value="iiib" data-select2-id="744">
                            3° Bimestre
                          </option>
                          <option value="ivb" data-select2-id="745">
                            4° Bimestre
                          </option>
                        </select>
                        <span
                          className="select2 select2-container select2-container--bootstrap4 select2-container--below"
                          dir="ltr"
                          data-select2-id="737"
                          style={{ width: '100%' }}
                        >
                          <span className="selection">
                            <span
                              className="select2-selection select2-selection--single"
                              role="combobox"
                              aria-haspopup="true"
                              aria-expanded="false"
                              tabIndex={0}
                              aria-disabled="false"
                              aria-labelledby="select2-periodo1-periodoProgAnual-9b-container"
                            >
                              <span
                                className="select2-selection__rendered"
                                id="select2-periodo1-periodoProgAnual-9b-container"
                                role="textbox"
                                aria-readonly="true"
                                title="1° Bimestre"
                              >
                                1° Bimestre
                              </span>
                              <span
                                className="select2-selection__arrow"
                                role="presentation"
                              >
                                <b role="presentation"></b>
                              </span>
                            </span>
                          </span>
                          <span
                            className="dropdown-wrapper"
                            aria-hidden="true"
                          ></span>
                        </span>
                      </div>
                      <div className="col">
                        <br />
                        <button
                          className="mb-2 mr-2 btn-icon btn-pill btn btn-danger delete-prog-anual-periodo_box float-right"
                          data-id="1"
                        >
                          <i className="ion-android-close"> </i>
                        </button>
                      </div>
                    </div>
                    <div className="row" data-select2-id="970">
                      <div className="col-6 col-lg-4">
                        <small className="form-text text-muted">
                          Fecha inicio:
                        </small>
                        <input
                          type="text"
                          className="form-control datepicker-periodo fchIni"
                          data-toggle="datepicker"
                          placeholder="Elegir fecha"
                          value="30/08/2023"
                          {...register("periodo1FchIni")}
                        />
                      </div>
                      <div className="col-6 col-lg-4">
                        <small className="form-text text-muted">
                          Fecha fin:
                        </small>
                        <input
                          type="text"
                          className="form-control datepicker-periodo fchFin"
                          data-toggle="datepicker"
                          placeholder="Elegir fecha"
                          value="17/09/2023"
                          {...register("periodo1FchFin")}
                        />
                      </div>
                      <div
                        className="col-12 col-lg-4"
                        data-select2-id="969"
                      >
                        <small className="form-text text-muted">
                          Sesión:
                        </small>
                        <select
                          className="form-control sesionProgAnual select2-hidden-accessible"
                          tabIndex={-1}
                          aria-hidden="true"
                          data-select2-id="756"
                          {...register("periodo1SesionProgAnual")}
                        >
                          <option
                            value="1"
                            data-select2-id="794"
                            selected
                          >
                            Sesión 1
                          </option>
                          <option value="2" data-select2-id="795">
                            Sesión 2
                          </option>
                          <option value="3" data-select2-id="796">
                            Sesión 3
                          </option>
                          <option value="4" data-select2-id="797">
                            Sesión 4
                          </option>
                          <option value="5" data-select2-id="798">
                            Sesión 5
                          </option>
                          <option value="6" data-select2-id="799">
                            Sesión 6
                          </option>
                          <option value="7" data-select2-id="800">
                            Sesión 7
                          </option>
                          <option value="8" data-select2-id="801">
                            Sesión 8
                          </option>
                          <option value="9" data-select2-id="802">
                            Sesión 9
                          </option>
                          <option value="10" data-select2-id="803">
                            Sesión 10
                          </option>
                          <option value="11" data-select2-id="804">
                            Sesión 11
                          </option>
                          <option value="12" data-select2-id="805">
                            Sesión 12
                          </option>
                          <option value="13" data-select2-id="806">
                            Sesión 13
                          </option>
                          <option value="14" data-select2-id="807">
                            Sesión 14
                          </option>
                          <option value="15" data-select2-id="808">
                            Sesión 15
                          </option>
                          <option value="16" data-select2-id="809">
                            Sesión 16
                          </option>
                          <option value="17" data-select2-id="810">
                            Sesión 17
                          </option>
                          <option value="18" data-select2-id="811">
                            Sesión 18
                          </option>
                          <option value="19" data-select2-id="812">
                            Sesión 19
                          </option>
                          <option value="20" data-select2-id="813">
                            Sesión 20
                          </option>
                          <option value="21" data-select2-id="814">
                            Sesión 21
                          </option>
                          <option value="22" data-select2-id="815">
                            Sesión 22
                          </option>
                          <option value="23" data-select2-id="816">
                            Sesión 23
                          </option>
                          <option value="24" data-select2-id="817">
                            Sesión 24
                          </option>
                          <option value="25" data-select2-id="818">
                            Sesión 25
                          </option>
                          <option value="26" data-select2-id="819">
                            Sesión 26
                          </option>
                          <option value="27" data-select2-id="820">
                            Sesión 27
                          </option>
                          <option value="28" data-select2-id="821">
                            Sesión 28
                          </option>
                          <option value="29" data-select2-id="822">
                            Sesión 29
                          </option>
                          <option value="30" data-select2-id="823">
                            Sesión 30
                          </option>
                          <option value="31" data-select2-id="824">
                            Sesión 31
                          </option>
                          <option value="32" data-select2-id="825">
                            Sesión 32
                          </option>
                          <option value="33" data-select2-id="826">
                            Sesión 33
                          </option>
                          <option value="34" data-select2-id="827">
                            Sesión 34
                          </option>
                          <option value="35" data-select2-id="828">
                            Sesión 35
                          </option>
                          <option value="36" data-select2-id="829">
                            Sesión 36
                          </option>
                        </select>
                        <span
                          className="select2 select2-container select2-container--bootstrap4 select2-container--below"
                          dir="ltr"
                          data-select2-id="757"
                          style={{ width: '100%' }}
                        >
                          <span className="selection">
                            <span
                              className="select2-selection select2-selection--single"
                              role="combobox"
                              aria-haspopup="true"
                              aria-expanded="false"
                              tabIndex={0}
                              aria-disabled="false"
                              aria-labelledby="select2-periodo1-sesionProgAnual-kh-container"
                            >
                              <span
                                className="select2-selection__rendered"
                                id="select2-periodo1-sesionProgAnual-kh-container"
                                role="textbox"
                                aria-readonly="true"
                                title="Sesión 1"
                              >
                                Sesión 1
                              </span>
                              <span
                                className="select2-selection__arrow"
                                role="presentation"
                              >
                                <b role="presentation"></b>
                              </span>
                            </span>
                          </span>
                          <span
                            className="dropdown-wrapper"
                            aria-hidden="true"
                          ></span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div
                    className="prog-anual-dia"
                    data-periodo="periodo1"
                    data-select2-id="956"
                  >
                    <div
                      className="prog-anual-dia_item"
                      data-select2-id="955"
                    >
                      <div className="row" data-select2-id="954">
                        <div
                          className="col-6 order-1 col-sm-4"
                          data-select2-id="953"
                        >
                          <small className="form-text text-muted">
                            Día de clase:
                          </small>
                          <select
                            className="form-control diaClaseProgAnual select2-hidden-accessible"
                            tabIndex={-1}
                            aria-hidden="true"
                            data-select2-id="904"
                            {...register("periodo1DiaClaseProgAnualDiaclase1")}
                          >
                            <option
                              value="1"
                              data-select2-id="913"
                              selected
                            >
                              Lunes
                            </option>
                            <option value="2" data-select2-id="914">
                              Martes
                            </option>
                            <option value="3" data-select2-id="915">
                              Miércoles
                            </option>
                            <option value="4" data-select2-id="916">
                              Jueves
                            </option>
                            <option value="5" data-select2-id="917">
                              Viernes
                            </option>
                            <option value="6" data-select2-id="918">
                              Sábado
                            </option>
                            <option value="7" data-select2-id="919">
                              Domingo
                            </option>
                          </select>
                          <span
                            className="select2 select2-container select2-container--bootstrap4 select2-container--below"
                            dir="ltr"
                            data-select2-id="905"
                            style={{ width: '100%' }}
                          >
                            <span className="selection">
                              <span
                                className="select2-selection select2-selection--single"
                                role="combobox"
                                aria-haspopup="true"
                                aria-expanded="false"
                                tabIndex={0}
                                aria-disabled="false"
                                aria-labelledby="select2-periodo1-diaClaseProgAnual-diaclase1-uz-container"
                              >
                                <span
                                  className="select2-selection__rendered"
                                  id="select2-periodo1-diaClaseProgAnual-diaclase1-uz-container"
                                  role="textbox"
                                  aria-readonly="true"
                                  title="Lunes"
                                >
                                  Lunes
                                </span>
                                <span
                                  className="select2-selection__arrow"
                                  role="presentation"
                                >
                                  <b role="presentation"></b>
                                </span>
                              </span>
                            </span>
                            <span
                              className="dropdown-wrapper"
                              aria-hidden="true"
                            ></span>
                          </span>
                        </div>
                        <div className="col-6 order-3 col-sm-3 order-sm-3">
                          <small className="form-text text-muted">
                            Hora inicio:
                          </small>
                          <input
                            type="time"
                            className="form-control horaInicioProgAnual"
                            value="09:00"
                            {...register("periodo1HoraInicioProgAnualDiaclase1")}
                          />
                        </div>
                        <div className="col-6 order-4 col-sm-3 order-sm-3">
                          <small className="form-text text-muted">
                            Hora fin:
                          </small>
                          <input
                            type="time"
                            className="form-control horaFinProgAnual"
                            value="10:00"
                            {...register("periodo1HoraFinProgAnualDiaclase1")}
                          />
                        </div>
                        <div className="col-6 order-2 col-sm-2 order-sm-4">
                          <br />
                          <button className="mb-2 mr-2 btn-icon btn-pill btn btn-primary btAgregarDia float-right">
                            <i className="ion-android-add"></i>
                          </button>
                        </div>
                      </div>
                    </div>

                    <div
                      className="prog-anual-dia_item-1"
                      data-select2-id="963"
                    >
                      <hr />
                      <div className="row" data-select2-id="962">
                        <div
                          className="col-6 order-1 col-sm-4"
                          data-select2-id="961"
                        >
                          <small className="form-text text-muted">
                            Día de clase:
                          </small>
                          <select
                            className="form-control diaClaseProgAnual select2-hidden-accessible"
                            tabIndex={-1}
                            aria-hidden="true"
                            data-select2-id="920"
                            {...register("periodo1DiaClaseProgAnualDiaclase2")}
                          >
                            <option value="1" data-select2-id="929">
                              Lunes
                            </option>
                            <option value="2" data-select2-id="930">
                              Martes
                            </option>
                            <option
                              value="3"
                              data-select2-id="931"
                              selected
                            >
                              Miércoles
                            </option>
                            <option value="4" data-select2-id="932">
                              Jueves
                            </option>
                            <option value="5" data-select2-id="933">
                              Viernes
                            </option>
                            <option value="6" data-select2-id="934">
                              Sábado
                            </option>
                            <option value="7" data-select2-id="935">
                              Domingo
                            </option>
                          </select>
                          <span
                            className="select2 select2-container select2-container--bootstrap4 select2-container--below"
                            dir="ltr"
                            data-select2-id="921"
                            style={{ width: '100%' }}
                          >
                            <span className="selection">
                              <span
                                className="select2-selection select2-selection--single"
                                role="combobox"
                                aria-haspopup="true"
                                aria-expanded="false"
                                tabIndex={0}
                                aria-disabled="false"
                                aria-labelledby="select2-periodo1-diaClaseProgAnual-diaclase2-a8-container"
                              >
                                <span
                                  className="select2-selection__rendered"
                                  id="select2-periodo1-diaClaseProgAnual-diaclase2-a8-container"
                                  role="textbox"
                                  aria-readonly="true"
                                  title="Miércoles"
                                >
                                  Miércoles
                                </span>
                                <span
                                  className="select2-selection__arrow"
                                  role="presentation"
                                >
                                  <b role="presentation"></b>
                                </span>
                              </span>
                            </span>
                            <span
                              className="dropdown-wrapper"
                              aria-hidden="true"
                            ></span>
                          </span>
                        </div>
                        <div className="col-6 order-3 col-sm-3 order-sm-2">
                          <small className="form-text text-muted">
                            Hora inicio:
                          </small>
                          <input
                            type="time"
                            className="form-control horaInicioProgAnual"
                            value="10:00"
                            {...register("periodo1HoraInicioProgAnualDiaclase2")}
                          />
                        </div>
                        <div className="col-6 order-4 col-sm-3">
                          <small className="form-text text-muted">
                            Hora fin:
                          </small>
                          <input
                            type="time"
                            className="form-control horaFinProgAnual"
                            value="11:00"
                            {...register("periodo1HoraFinProgAnualDiaclase2")}
                          />
                        </div>
                        <div className="col-6 order-2 col-sm-2 order-sm-4">
                          <br />
                          <button className="mb-2 mr-2 btn-icon btn-pill btn btn-danger btEliminarDia float-right">
                            <i className="ion-android-close"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </fieldset>
              </div>
              <div
                className="tab-pane show active"
                id="tab-eg6-2"
                role="tabpanel"
                data-select2-id="tab-eg6-2"
              >
                <fieldset
                  id="fieldset-item-2"
                  data-select2-id="fieldset-item-2"
                >
                  <div
                    className="prog-anual-periodo"
                    data-select2-id="974"
                  >
                    <div className="row" data-select2-id="973">
                      <div className="col" data-select2-id="972">
                        <small className="form-text text-muted">
                          Periodo:
                        </small>
                        <select
                          className="form-control periodoProgAnual select2-hidden-accessible"
                          tabIndex={-1}
                          aria-hidden="true"
                          data-select2-id="746"
                          {...register("periodo2PeriodoProgAnual")}
                        >
                          <option value="ib" data-select2-id="752">
                            1° Bimestre
                          </option>
                          <option
                            value="iib"
                            data-select2-id="753"
                            selected
                          >
                            2° Bimestre
                          </option>
                          <option value="iiib" data-select2-id="754">
                            3° Bimestre
                          </option>
                          <option value="ivb" data-select2-id="755">
                            4° Bimestre
                          </option>
                        </select>
                        <span
                          className="select2 select2-container select2-container--bootstrap4 select2-container--below"
                          dir="ltr"
                          data-select2-id="747"
                          style={{ width: '100%' }}
                        >
                          <span className="selection">
                            <span
                              className="select2-selection select2-selection--single"
                              role="combobox"
                              aria-haspopup="true"
                              aria-expanded="false"
                              tabIndex={0}
                              aria-disabled="false"
                              aria-labelledby="select2-periodo2-periodoProgAnual-ob-container"
                            >
                              <span
                                className="select2-selection__rendered"
                                id="select2-periodo2-periodoProgAnual-ob-container"
                                role="textbox"
                                aria-readonly="true"
                                title="2° Bimestre"
                              >
                                2° Bimestre
                              </span>
                              <span
                                className="select2-selection__arrow"
                                role="presentation"
                              >
                                <b role="presentation"></b>
                              </span>
                            </span>
                          </span>
                          <span
                            className="dropdown-wrapper"
                            aria-hidden="true"
                          ></span>
                        </span>
                      </div>
                      <div className="col">
                        <br />
                        <button
                          className="mb-2 mr-2 btn-icon btn-pill btn btn-danger delete-prog-anual-periodo_box float-right"
                          data-id="2"
                        >
                          <i className="ion-android-close"> </i>
                        </button>
                      </div>
                    </div>
                    <div className="row" data-select2-id="977">
                      <div className="col-6 col-lg-4">
                        <small className="form-text text-muted">
                          Fecha inicio:
                        </small>
                        <input
                          type="text"
                          className="form-control datepicker-periodo fchIni"
                          data-toggle="datepicker"
                          placeholder="Elegir fecha"
                          value="02/10/2023"
                          {...register("periodo2FchIni")}
                        />
                      </div>
                      <div className="col-6 col-lg-4">
                        <small className="form-text text-muted">
                          Fecha fin:
                        </small>
                        <input
                          type="text"
                          className="form-control datepicker-periodo fchFin"
                          data-toggle="datepicker"
                          placeholder="Elegir fecha"
                          value="16/12/2023"
                          {...register("periodo2FchFin")}
                        />
                      </div>
                      <div
                        className="col-12 col-lg-4"
                        data-select2-id="976"
                      >
                        <small className="form-text text-muted">
                          Sesión:
                        </small>
                        <select
                          className="form-control sesionProgAnual select2-hidden-accessible"
                          tabIndex={-1}
                          aria-hidden="true"
                          data-select2-id="830"
                          {...register("periodo2SesionProgAnual")}
                        >
                          <option value="1" data-select2-id="868">
                            Sesión 1
                          </option>
                          <option value="2" data-select2-id="869">
                            Sesión 2
                          </option>
                          <option
                            value="3"
                            data-select2-id="870"
                            selected
                          >
                            Sesión 3
                          </option>
                          <option value="4" data-select2-id="871">
                            Sesión 4
                          </option>
                          <option value="5" data-select2-id="872">
                            Sesión 5
                          </option>
                          <option value="6" data-select2-id="873">
                            Sesión 6
                          </option>
                          <option value="7" data-select2-id="874">
                            Sesión 7
                          </option>
                          <option value="8" data-select2-id="875">
                            Sesión 8
                          </option>
                          <option value="9" data-select2-id="876">
                            Sesión 9
                          </option>
                          <option value="10" data-select2-id="877">
                            Sesión 10
                          </option>
                          <option value="11" data-select2-id="878">
                            Sesión 11
                          </option>
                          <option value="12" data-select2-id="879">
                            Sesión 12
                          </option>
                          <option value="13" data-select2-id="880">
                            Sesión 13
                          </option>
                          <option value="14" data-select2-id="881">
                            Sesión 14
                          </option>
                          <option value="15" data-select2-id="882">
                            Sesión 15
                          </option>
                          <option value="16" data-select2-id="883">
                            Sesión 16
                          </option>
                          <option value="17" data-select2-id="884">
                            Sesión 17
                          </option>
                          <option value="18" data-select2-id="885">
                            Sesión 18
                          </option>
                          <option value="19" data-select2-id="886">
                            Sesión 19
                          </option>
                          <option value="20" data-select2-id="887">
                            Sesión 20
                          </option>
                          <option value="21" data-select2-id="888">
                            Sesión 21
                          </option>
                          <option value="22" data-select2-id="889">
                            Sesión 22
                          </option>
                          <option value="23" data-select2-id="890">
                            Sesión 23
                          </option>
                          <option value="24" data-select2-id="891">
                            Sesión 24
                          </option>
                          <option value="25" data-select2-id="892">
                            Sesión 25
                          </option>
                          <option value="26" data-select2-id="893">
                            Sesión 26
                          </option>
                          <option value="27" data-select2-id="894">
                            Sesión 27
                          </option>
                          <option value="28" data-select2-id="895">
                            Sesión 28
                          </option>
                          <option value="29" data-select2-id="896">
                            Sesión 29
                          </option>
                          <option value="30" data-select2-id="897">
                            Sesión 30
                          </option>
                          <option value="31" data-select2-id="898">
                            Sesión 31
                          </option>
                          <option value="32" data-select2-id="899">
                            Sesión 32
                          </option>
                          <option value="33" data-select2-id="900">
                            Sesión 33
                          </option>
                          <option value="34" data-select2-id="901">
                            Sesión 34
                          </option>
                          <option value="35" data-select2-id="902">
                            Sesión 35
                          </option>
                          <option value="36" data-select2-id="903">
                            Sesión 36
                          </option>
                        </select>
                        <span
                          className="select2 select2-container select2-container--bootstrap4 select2-container--below"
                          dir="ltr"
                          data-select2-id="831"
                          style={{ width: '100%' }}
                        >
                          <span className="selection">
                            <span
                              className="select2-selection select2-selection--single"
                              role="combobox"
                              aria-haspopup="true"
                              aria-expanded="false"
                              tabIndex={0}
                              aria-disabled="false"
                              aria-labelledby="select2-periodo2-sesionProgAnual-mt-container"
                            >
                              <span
                                className="select2-selection__rendered"
                                id="select2-periodo2-sesionProgAnual-mt-container"
                                role="textbox"
                                aria-readonly="true"
                                title="Sesión 1"
                              >
                                Sesión 1
                              </span>
                              <span
                                className="select2-selection__arrow"
                                role="presentation"
                              >
                                <b role="presentation"></b>
                              </span>
                            </span>
                          </span>
                          <span
                            className="dropdown-wrapper"
                            aria-hidden="true"
                          ></span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div
                    className="prog-anual-dia"
                    data-periodo="periodo2"
                    data-select2-id="982"
                  >
                    <div
                      className="prog-anual-dia_item"
                      data-select2-id="981"
                    >
                      <div className="row" data-select2-id="980">
                        <div
                          className="col-6 order-1 col-sm-4"
                          data-select2-id="979"
                        >
                          <small className="form-text text-muted">
                            Día de clase:
                          </small>
                          <select
                            className="form-control diaClaseProgAnual select2-hidden-accessible"
                            tabIndex={-1}
                            aria-hidden="true"
                            data-select2-id="936"
                            {...register("periodo2DiaClaseProgAnualDiaclase1")}
                          >
                            <option
                              value="1"
                              data-select2-id="945"
                              selected
                            >
                              Lunes
                            </option>
                            <option value="2" data-select2-id="946">
                              Martes
                            </option>
                            <option value="3" data-select2-id="947">
                              Miércoles
                            </option>
                            <option value="4" data-select2-id="948">
                              Jueves
                            </option>
                            <option value="5" data-select2-id="949">
                              Viernes
                            </option>
                            <option value="6" data-select2-id="950">
                              Sábado
                            </option>
                            <option value="7" data-select2-id="951">
                              Domingo
                            </option>
                          </select>
                          <span
                            className="select2 select2-container select2-container--bootstrap4 select2-container--below"
                            dir="ltr"
                            data-select2-id="937"
                            style={{ width: '100%' }}
                          >
                            <span className="selection">
                              <span
                                className="select2-selection select2-selection--single"
                                role="combobox"
                                aria-haspopup="true"
                                aria-expanded="false"
                                tabIndex={0}
                                aria-disabled="false"
                                aria-labelledby="select2-periodo2-diaClaseProgAnual-diaclase1-v4-container"
                              >
                                <span
                                  className="select2-selection__rendered"
                                  id="select2-periodo2-diaClaseProgAnual-diaclase1-v4-container"
                                  role="textbox"
                                  aria-readonly="true"
                                  title="Lunes"
                                >
                                  Lunes
                                </span>
                                <span
                                  className="select2-selection__arrow"
                                  role="presentation"
                                >
                                  <b role="presentation"></b>
                                </span>
                              </span>
                            </span>
                            <span
                              className="dropdown-wrapper"
                              aria-hidden="true"
                            ></span>
                          </span>
                        </div>
                        <div className="col-6 order-3 col-sm-3 order-sm-3">
                          <small className="form-text text-muted">
                            Hora inicio:
                          </small>
                          <input
                            type="time"
                            className="form-control horaInicioProgAnual"
                            value="08:00"
                            {...register("periodo2HoraInicioProgAnualDiaclase1")}
                          />
                        </div>
                        <div className="col-6 order-4 col-sm-3 order-sm-3">
                          <small className="form-text text-muted">
                            Hora fin:
                          </small>
                          <input
                            type="time"
                            className="form-control horaFinProgAnual"
                            value="09:00"
                            {...register("periodo2HoraFinProgAnualDiaclase1")}
                          />
                        </div>
                        <div className="col-6 order-2 col-sm-2 order-sm-4">
                          <br />
                          <button className="mb-2 mr-2 btn-icon btn-pill btn btn-primary btAgregarDia float-right">
                            <i className="ion-android-add"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </fieldset>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <button
          type="submit"
          id="bt-generar-prog-anual"
          className="btn btn-primary"
        >
          Generar
        </button>
      </div>
    </form>
  )
}
