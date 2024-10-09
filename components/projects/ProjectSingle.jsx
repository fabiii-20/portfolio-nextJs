import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const imageStyle = { maxWidth: '100%', height: 'auto' };

const ProjectSingle = (props) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, delay: 1 }}
			transition={{
				ease: 'easeInOut',
				duration: 0.7,
				delay: 0.15,
			}}
		>
			<Link
				href={props.url!=="" ? props.url :"/projects/" + props.id}
				// as={'/projects/' + props.id}
				target="_blank"
				aria-label="Single Project"
				passHref
			>
				<div className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark">
					<div className='h-48 overflow-hidden'>
						<motion.img
							src={props.img}
							className="rounded-t-xl border-none w-full"
							alt="Single Project"
							layout="responsive"
							width={100}
							whileHover={{ scale: 1.05 }}
							transition={{ duration: 0.5 }}
							
						/>
					</div>
					<div className="px-4 py-2 h-36 flex flex-col  justify-between items-start">
						<div className=''>
							<p className="font-general-medium uppercase text-xl md:text-2xl text-ternary-dark dark:text-ternary-light mb-2">
								{props.title}
							</p>
							<p className='text-left'>{props.subtitle}</p>
						</div>
						<span className="text-lg text-ternary-dark dark:text-ternary-light w-fit bg-blue-200 dark:bg-slate-800 rounded-md px-2 py-1 text-sm">
							{props.category}
						</span>
					</div>
				</div>
			</Link>
		</motion.div>
	);
};

export default ProjectSingle;
