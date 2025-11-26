import Container from '@/ui/components/container/Container';
import Box from '@/ui/design-system/box/Box';
import Typography from '@/ui/design-system/typography/Typography';
import Link from 'next/link';
import React from 'react'
import Image from 'next/image';
import LoginForm from './LoginForm';

const LoginView = () => {
  return (
		<Container className="grid grid-cols-2 gap-20 mb-32">
			<div className="flex items-center">
				<div className="relative w-full h-[531px]">
					<Image
						fill
						src="/assets/images/character-2.png"
						alt="illustration d'un bonhomme"
						className=" object-scale-down"
					/>
				</div>
			</div>
			<div className="flex items-center">
				<Box padding_y="py-5">
					<div className="flex justify-between items-center">
						<Typography variant="h5" components="h1">
							Connexion
						</Typography>
						<div className="flex items-center gap-3">
							<Typography
								variant="caption4"
								components="span"
								theme="gray"
							>
								Tu n'as pas de compte ?
							</Typography>
							<Typography
								variant="caption4"
								components="span"
								theme="primary"
							>
								<Link href="/connexion/inscription">S'inscrire</Link>
							</Typography>
						</div>
					</div>
					<LoginForm/>
				</Box>
			</div>
		</Container>
  );
}

export default LoginView