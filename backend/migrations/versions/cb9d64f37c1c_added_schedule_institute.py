"""added schedule, institute

Revision ID: cb9d64f37c1c
Revises: 5acb962ea819
Create Date: 2023-04-06 00:50:29.717442

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'cb9d64f37c1c'
down_revision = '5acb962ea819'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('entries',
    sa.Column('entry_id', sa.Integer(), nullable=False),
    sa.Column('entry_day', sa.Enum('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'), nullable=False),
    sa.Column('entry_start_time', sa.Time(), nullable=False),
    sa.Column('entry_end_time', sa.Time(), nullable=False),
    sa.Column('entry_insti_id', sa.Integer(), nullable=False),
    sa.PrimaryKeyConstraint('entry_id')
    )
    op.create_table('institute',
    sa.Column('insti_id', sa.Integer(), nullable=False),
    sa.Column('insti_name', sa.String(length=100), nullable=False),
    sa.PrimaryKeyConstraint('insti_id')
    )
    op.create_table('slot__entries',
    sa.Column('slot_entry_id', sa.Integer(), nullable=False),
    sa.PrimaryKeyConstraint('slot_entry_id')
    )
    op.create_table('slots',
    sa.Column('slot_id', sa.Integer(), nullable=False),
    sa.Column('slot_name', sa.String(length=100), nullable=False),
    sa.Column('slot_insti_id', sa.Integer(), nullable=False),
    sa.PrimaryKeyConstraint('slot_id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('slots')
    op.drop_table('slot__entries')
    op.drop_table('institute')
    op.drop_table('entries')
    # ### end Alembic commands ###
