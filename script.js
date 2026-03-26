lucide.createIcons();

const pieCtx = document.getElementById('pieChart').getContext('2d');
const pieChart = new Chart(pieCtx, {
	type: 'doughnut',
	data: {
		labels: ['Segment A', 'Segment B', 'Segment C', 'Segment D'],
		datasets: [{
			data: [30, 20, 20, 30],
			backgroundColor: ['#6366f1', '#a78bfa', '#e9d5ff', '#f3e8ff'],
			borderColor: '#ffffff',
			borderWidth: 2,
		}]
	},
	options: {
		responsive: true,
		maintainAspectRatio: true,
		plugins: {
			legend: {
				position: 'bottom',
				labels: {
					color: '#1f2937',
					font: {
						size: 12,
						weight: 600
					},
					padding: 16,
				}
			}
		}
	}
});

const barCtx = document.getElementById('barChart').getContext('2d');
const barChart = new Chart(barCtx, {
	type: 'bar',
	data: {
		labels: ['Segment A', 'Segment B', 'Segment C', 'Segment D'],
		datasets: [{
			label: 'Performance %',
			data: [85, 62, 48, 71],
			backgroundColor: [
				'#6366f1',
				'#7c3aed',
				'#a78bfa',
				'#c4b5fd'
			],
			borderRadius: 6,
			borderSkipped: false
		}]
	},
	options: {
		responsive: true,
		maintainAspectRatio: true,
		indexAxis: 'y',
		plugins: {
			legend: {
				display: false
			}
		},
		scales: {
			x: {
				max: 100,
				ticks: {
					color: '#6b7280'
				},
				grid: {
					color: '#e5e7eb'
				},
				axis: 'x'
			},
			y: {
				ticks: {
					color: '#1f2937',
					font: {
						weight: 600
					}
				},
				grid: {
					display: false
				}
			}
		}
	}
});