SELECT a.item FROM "Assets" a
JOIN "Users" u ON a.user_id = u.user_id
GROUP BY a.item;

SELECT u.user_id, ARRAY TEXT(a.item;0) FROM "Users" u
JOIN "Assets" a ON a.user_id = u.user_id;
