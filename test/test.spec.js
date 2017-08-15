import test from 'tape'

import {
  cubicFt, dispLen, kgToLongTon, metersToFeet, displacementLength, dispLenDebug, dispLenImp,
  sailDispImp,
} from '../src/redux/select/calc'

test('metersToFeet', t => {
  t.equal(metersToFeet(11), 36.089238845000004)
  t.end()
})
test('dispLength', t => {
  t.equal(dispLen(metersToFeet(9.75)), 0.032731729925419444)
  t.equal(dispLen(metersToFeet(9.7536)), 0.03276799999960679)
  t.end()
})
test('kgToLongTon', t => {
  t.equal(kgToLongTon(7112.3284), 7.000000029526196)
  t.end()
})
test('getDisplacementLength', t => {
  t.equal(displacementLength(7112, 9.75), 214)
  t.equal(displacementLength(9071.85, 8.38), 430, 'westsail 32')
  t.end()
})
const west32 = {
  disp: 9071.86, dispLen: 430, ft: 27.493438320100005, lb: 20000.0039932,
  length: 0.020781991740534928, lwl: 8.38, ton: 8.928583819028592,
}
test('dispLenDebug', t => {
  t.deepEqual(dispLenDebug(9071.86, 8.38), west32)
  t.end()
})
test('dispLenImp', t => {
  // friendship 40
  t.equal(dispLenImp(22500, 29.58), 388, 'friendship 40')
  t.equal(dispLenImp(19000, 32.42), 249, 'Catalina 387')
  t.end()
})
test('cubicFt', t => {
  t.equal(cubicFt(15680), 245)
  t.end()
})
test('sailDispImp', t => {
  t.equal(sailDispImp(704, 15680), 18)
  t.end()
})
