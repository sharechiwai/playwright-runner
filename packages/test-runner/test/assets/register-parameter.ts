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

import { fixtures as baseFixtures, expect } from '../..';

type Parameters = {
  param1: string;
  param2: string;
};

const fixtures = baseFixtures.declareParameters<Parameters>();
fixtures.defineParameter('param1', 'Custom parameter 1');
fixtures.defineParameter('param2', 'Custom parameter 2', 'value2');

const { it } = fixtures;

it('pass', async ({ param1, param2 }) => {
  expect(param1).toBe('value1');
  expect(param2).toBe('value2');
});
