import className from 'classnames/bind';
import styles from './Button.module.scss';

const cx = className.bind(styles);
interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  border?: boolean;
  primary?: boolean;
  rounded_full?: boolean;
  rounded_md?: boolean;
  width_full?: boolean;
}

const Button: React.FC<ButtonProps> = (data) => {
  const Comp = 'button';
  // if (data.href) {
  //   Comp = 'a';
  // }
  const classes = [
    'border-[1px]',
    'inline-block',
    'px-4',
    'py-2',
    'lg:text-lg',
    data.width_full && `w-full`,
    data.rounded_md && 'rounded-md',
    data.rounded_full && 'rounded-full',
    data.primary && 'primary',
    data.border && 'border',
  ];
  return (
    <div>
      <Comp className={cx(...classes)}>{data.children}</Comp>
    </div>
  );
};
export default Button;
