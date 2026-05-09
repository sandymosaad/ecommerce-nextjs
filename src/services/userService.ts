export async function updateUser(id: string, updates: Record<string, any>) {
	const res = await fetch(`/api/users`, {
		method: "PATCH",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ id, updates }),
	});

	if (!res.ok) {
		const err = await res.json().catch(() => ({}));
		throw new Error(err?.error || `Failed to update user: ${res.status}`);
	}

	const data = await res.json();
	return data.user;
}

export default { updateUser };
