import { watchPostScore } from './PostScoreSaga';

export default function* () {
  yield [
    watchPostScore
  ];
}