export type ValentineDay = {
	title: string;
	slug: string;
	importance: string;
  cardBgImage: string;
  date: string;
  bgImage: string;
  shayari: string;
  line: string;
	accentColor: string;
};

export type DayCardProps = {
	day: ValentineDay;
	unlocked: boolean;
};

export type LockedDayModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export type ValentineFinaleProps = {
  message: string;
}

export type DayExperienceProps = {
  day: ValentineDay;
};
