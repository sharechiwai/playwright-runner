/**
 * Copyright (c) Microsoft Corporation.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { fixtures as baseFixtures } from '../..';

type TypeOnlyTestState = {
  testTypeOnly: string;
};
type TypeOnlyWorkerState = {
  workerTypeOnly: number;
};

export const fixtures2 = baseFixtures
    .declareWorkerFixtures<TypeOnlyWorkerState>()
    .declareTestFixtures<TypeOnlyTestState>();

fixtures2.defineTestFixture('testTypeOnly', async ({config}, runTest, info) => {
  await runTest('testTypeOnly');
});

fixtures2.defineWorkerFixture('workerTypeOnly', async ({parallelIndex}, runTest, info) => {
  await runTest(42);
});
