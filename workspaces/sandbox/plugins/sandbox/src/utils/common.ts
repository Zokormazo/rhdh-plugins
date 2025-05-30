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
export const errorMessage = (e: unknown): string => {
  if (typeof e === 'string') {
    return e; // Directly return string errors
  }

  if (e instanceof Error) {
    return e?.message; // Handle built-in Error objects
  }

  if (typeof e === 'object' && e !== null) {
    const maybeMessage = (e as { message?: unknown })?.message;
    if (typeof maybeMessage === 'string') {
      return maybeMessage; // Extract message property if it exists
    }
    return JSON.stringify(e); // Convert object to string for better debugging
  }

  return 'An unknown error occurred'; // Fallback message
};
