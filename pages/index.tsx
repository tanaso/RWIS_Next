import Page from '@/components/page'
import Section from '@/components/section'
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';

const Index = () => (
	<Page>
		<Section>
			<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', margin: '20px' }}>
				<h1 className='text-xl font-semibold text-zinc-800 dark:text-zinc-200'>
					Category A
				</h1>
				<Button variant="outlined" style={{ fontSize: '20px', padding: '10px 20px', color: 'green', borderColor: 'green', width: '70%', marginTop:'10%' }}>
					TaskList
				</Button>
				<Button variant="outlined" style={{ fontSize: '20px', padding: '10px 20px', color: 'green', borderColor: 'green', width: '70%', marginTop:'10%' }}>
					Garden
				</Button>
				<Button variant="outlined" style={{ fontSize: '20px', padding: '10px 20px', color: 'green', borderColor: 'green', width: '70%', marginTop:'10%' }}>
					Encyclopedia
				</Button>
			</div>
			<Fab color="primary" aria-label="add" style={{ position: 'fixed', right: 20, bottom: 100, border: '1px solid white' }}>
				<AddIcon />
			</Fab>
		</Section>
	</Page>
)

export default Index