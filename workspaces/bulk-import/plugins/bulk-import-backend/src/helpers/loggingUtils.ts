/*
 * Copyright Red Hat, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import type { LoggerService } from '@backstage/backend-plugin-api';
import { isError } from '@backstage/errors';

/**
 * Logs the error specified by ensuring no sensitive internal data is disclosed.
 * @param logger the logger
 * @param logMsg the log message
 * @param error the error
 */
export function logErrorIfNeeded(
  logger: LoggerService,
  logMsg: string,
  error: any,
) {
  if (isError(error)) {
    // Ensure that we don't log any sensitive internal data:
    logger.error(logMsg, {
      // Default Error properties:
      name: error.name,
      message: error.message,
      stack: error.stack,
      // Additional status code if available:
      status: (error.response as { status?: string })?.status,
    });
  }
}
