import { round } from '../../helpers/understory'

export function getLengthBeam(length, beam) {
  return length && beam && round(length / beam)
}
export const kgPerLongTon = 1016.04691
export const kgPerPound = 0.453592
export const lbsPerKilo = 2.20462
export function kiloToPound(kilos) {
  return kilos * lbsPerKilo
}
export const mPerFt = 0.3048

export const ftPerMeter = 3.280839895
export function metersToFeet(meters) {
  return meters * ftPerMeter
}

export const ftPerSqM = 10.7639
export function sqMetersToFeet(meters) {
  return meters * ftPerSqM
}
export function kgToLongTon(kilos) {
  return kilos / kgPerLongTon
}
export function lbsToLongTon(pounds) {
  return pounds / 2240
}
export function dispLen(feet) {
  return Math.pow((feet * 0.01), 3)
}
export function displacementLength(displacement, lwl) {
  if (!displacement || !lwl) return null
  const length = dispLen(metersToFeet(lwl))
  const longTons = kgToLongTon(displacement)
  return Math.round(longTons / length)
}
export function dispLenImp(pounds, feet) {
  return Math.round(lbsToLongTon(pounds) / dispLen(feet))
}
export function dispLenDebug(disp, lwl) {
  return {
    disp,
    lwl,
    ft: metersToFeet(lwl),
    lb: kiloToPound(disp),
    ton: kgToLongTon(disp),
    length: dispLen(metersToFeet(lwl)),
    dispLen: displacementLength(disp, lwl),
  }
}

// CAPSIZE SCREENING FORMULA
export function csfImp(beam, disp) {
  if (!beam || !disp) return null
  return round(beam / (Math.pow((disp / 64), (1 / 3))))
}
export function csf(beam, disp) {
  return csfImp(metersToFeet(beam), kiloToPound(disp))
}
export function comfortRatioImp(loa, lwl, disp, beam) {
  return parseInt(disp / (0.65 * ((0.7 * lwl) + (0.3 * loa)) * Math.pow(beam, (4 / 3))), 10)
}
export function comfortRatio(loa, lwl, disp, beam) {
  if (!loa || !lwl || !disp || !beam) return null
  return comfortRatioImp(
    metersToFeet(loa), metersToFeet(lwl), kiloToPound(disp), metersToFeet(beam)
  )
}
const saltyPoundsCubicFt = 64
export function cubicFt(pounds) {
  return pounds / saltyPoundsCubicFt
}
export function sailDispWeight(displacement) {
  return Math.pow(cubicFt(displacement), (2 / 3))
}
export function sailDispImp(sailArea, displacement) {
  return Math.round(sailArea / sailDispWeight(displacement))
}
export function sailDisp(sailArea, displacement) {
  if (!displacement || !sailArea) return null
  return sailDispImp(sqMetersToFeet(sailArea), kiloToPound(displacement))
}
