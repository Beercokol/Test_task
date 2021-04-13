export function fetchRules<T>(url: string): Promise<T> {
  return fetch(url).then((response) => {
    if (!response.ok) {
      return response.statusText;
    }
    return response.json();
  });
}
