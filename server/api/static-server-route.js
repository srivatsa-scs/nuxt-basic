export default defineEventHandler(async (event)=> {
	const { name } = useQuery(event);
	const { age } = useBody(event);
})